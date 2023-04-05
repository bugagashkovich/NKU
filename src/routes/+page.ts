import mqtt from "mqtt/dist/mqtt.min";
import { browser } from "$app/environment";
import { power } from "./store";

if (browser) {
  let client = mqtt.connect(`ws://test.mosquitto.org:8081`, {});
  client.subscribe("5dhjsy2781/Power", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("SUBSCRIBED");
    }

    client.on("message", function (topic: string, message: Buffer) {
      power.set(Number(message.toString()));
    });
  });

  power.subscribe((data: number) => {
    client.publish("5dhjsy2781/Power", data.toString());
  });
}
