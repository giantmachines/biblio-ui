declare module '*.scss' {
  const value: {
    baseClass?: string;
    [key: string]: string | undefined;
  };
  export = value;
}
