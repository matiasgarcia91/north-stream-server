const event1 = {
  livechatId: 1423,
  name: "Matias",
  streamUrl: undefined,
  id: 12,
};
console.log(event1);

const eventKeys = ["livechatId", "streamUrl", "watermark", "name"];

const cleanEvent = eventKeys.reduce(
  (acc, key) =>
    !event1[key] && event1[key] !== false
      ? acc
      : { ...acc, [key]: event1[key] },
  {}
);
console.log(cleanEvent);
