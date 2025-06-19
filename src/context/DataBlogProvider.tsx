// src/context/DataBlogContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import type { BlogData } from "@src/types/blog";

const PUBLIC_DATA_URL =
  "https://amplify-d2jefuxcjjakai-ma-publiquestoragebucketac0-tjlluvtci6g6.s3.eu-west-3.amazonaws.com/publique-storage/data.json";

interface DataBlogContextProps {
  data: BlogData | null;
  loading: boolean;
  error: Error | null;
}

const DataBlogContext = createContext<DataBlogContextProps | undefined>(
  undefined,
);

export function DataBlogProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const worker = new Worker(
      new URL("/public/workers/fetchBlogData.js", import.meta.url),
    );

    setLoading(true);
    worker.postMessage({ url: PUBLIC_DATA_URL });

    worker.onmessage = (
      event: MessageEvent<{ type: string; data?: BlogData; message?: string }>,
    ) => {
      const { type, data: json, message } = event.data;
      if (type === "success" && json) {
        setData(json);
        setError(null);
      }
      if (type === "error" && message) {
        setError(new Error(message));
      }
      setLoading(false);
    };

    worker.onerror = (e) => {
      setError(e as unknown as Error);
      setLoading(false);
    };

    return () => {
      worker.terminate();
    };
  }, []);

  const value = useMemo(
    () => ({ data, loading, error }),
    [data, loading, error],
  );

  return (
    <DataBlogContext.Provider value={value}>
      {children}
    </DataBlogContext.Provider>
  );
}

export function useDataBlog() {
  const ctx = useContext(DataBlogContext);
  if (!ctx)
    throw new Error("useDataBlog doit être utilisé dans un DataBlogProvider");
  return ctx;
}