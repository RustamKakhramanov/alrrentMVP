interface Window {
  ym?: (
    counterId: number, 
    event: string, 
    eventName: string, 
    eventParams?: Record<string, any>
  ) => void;
  dataLayer?: any[];
}

export {};