type Event = {
  message: string;
};

const processUserMap = (eventMap: Map<string, Event>) => {
  const newLocal = eventMap.get("error");
  if (newLocal) {
    const message = newLocal.message;

    throw new Error(message);
  }
};
