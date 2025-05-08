# 📘 TypeScript- এ Enum এবং Type Inference

এই ডকুমেন্টটিতে আমি মূলত `TypeScript` শেখার সময় সবচেয়ে বেশি কাজে লাগা দুটি গুরুত্বপূর্ণ বিষয় — `Enum` ও `Type Inference` — নিয়ে আলোচনা করছি। এখানে আমি চেষ্টা করছি বাস্তব উদাহরণসহ সহজ ভাষায় বুঝিয়ে দিতে যেন নতুনরাও সহজে ধরতে পারেন ।

---

🎯 Enum কী ও কেন ব্যবহার করব?

TypeScript- এ `Enum`( এনাম) হচ্ছে এমন এক ধরনের ডেটা টাইপ, যা কিছু নির্দিষ্ট মানকে একটি গ্রুপে সাজিয়ে রাখে । আপনি যদি এমন ভ্যালুগুলোর সাথে কাজ করেন যেগুলোর নাম ও মান আগে থেকেই নির্ধারিত থাকে, তাহলে Enum আপনার কোডকে অনেক বেশি পরিষ্কার ও মেইনটেইনযোগ্য করে তোলে ।

🔢 Numeric Enum( সংখ্যাভিত্তিক)

```ts
enum Direction{
Up,// 0
Down,// 1
Left,// 2
Right,// 3
}

let move Direction = Direction.Up;
( move);// আউটপুট 0
```

এখানে `Direction.Up` এর মান স্বয়ংক্রিয়ভাবে 0 হয়েছে এবং পরে গুলো একে একে 1, 2, 3 হয়ে গেছে ।

🧵 String Enum( স্ট্রিং ভিত্তিক)

```ts
enum Status{
Success = " SUCCESS",
Failure = " FAILURE",
Pending = " PENDING",
}

let current Status = Status.Pending;
( current);// আউটপুট" PENDING"
```

স্ট্রিং `Enum` ব্যবহার করলে মান গুলোকে আরও অর্থবোধকভাবে উপস্থাপন করা যায় এবং ডিবাগ করাও সহজ হয় ।

---

🔍 Type Conclusion কী?

`Type Conclusion` মানে হচ্ছে টাইপস্ক্রিপ্ট নিজে থেকেই কোনো ভ্যারিয়েবলের টাইপ বোঝার চেষ্টা করে । ধরুন, আপনি লিখলেন

```ts
let age = 25;
```

এখানে আপনি টাইপ উল্লেখ না করলেও TypeScript বুঝে নিয়েছে যে age একটি number টাইপের ভ্যারিয়েবল । এই স্বয়ংক্রিয় টাইপ বোঝার ক্ষমতাকেই বলা হয় Type Conclusion ।

🤔 কেন এটা গুরুত্বপূর্ণ?

- ⏱️ টাইপ না লিখেও দ্রুত কোড লেখা যায়
- 🧠 কোড ক্লিন থাকে এবং টাইপ সংক্রান্ত ভুল কম হয়
- 🛡️ প্রকারভেদ অনুযায়ী নিরাপত্তা বজায় থাকে

```ts
let name = "Anika";
name = 42; // ⚠️ Error Type' number' isn't assignable to class' string'
```

এখানে `name` প্রথমে স্ট্রিং হিসেবে ইনফার হয়েছিল, তাই পরে নাম্বার অ্যাসাইন করতে গেলে TypeScript ধরতে পারছে যে এটা ভুল । 

---


# 📘 TypeScript- এ Union vs Intersection

TypeScript-এ Union (|) এবং Intersection (&) টাইপ দুই ধরনের টাইপ অপারেটর, যেগুলো দিয়ে বিভিন্ন টাইপের সংমিশ্রণ তৈরি করা যায়, তবে এগুলর ব্যবহার আলাদা হয় ।

## উদাহরন -
```ts
type A = string | number;

let value: A;
value = "hello";   // ✅ correct
value = 42;        // ✅ correct
value = true;      // ❌ wrong
```

## Intersection Type (&)
Intersection টাইপ মানে হলো: একাধিক টাইপের গুণাবলী একত্রে থাকতে হবে।

উদাহরণ:
```ts

type A = { name: string };
type B = { age: number };

type C = A & B;

const person: C = {
  name: "Rahim",
  age: 25,
};
```
এখানে `person` অবজেক্টটি A এবং B — দুইটাই পূরণ করতে হবে। অর্থাৎ, এতে `name` এবং `age` দুটোই থাকতে হবে।


## 🔁 তুলনা

| `দিক` | `Union (|)` | `Intersection (&)` |
|----------|----------|----------|
| `কাজ`   |`অনেকগুলর মধ্য থেকে যেকোনো একটি` |`অনেকগুলো তাইপের সংমিশ্রণ এ তৈরি সঙ্কর টাইপ`|
| `কেন ব্যাবহার করি`   | `ফ্লেক্সিবিলিটি`   | `স্ট্রিক্ট মিক্স` |
|`উদাহরন`|`string | number → হয় string, নয় number`|`{ name: string } & { age: number } → দুইটাই থাকা লাগবে`|



---
## ব্যবহারিক দৃষ্টান্ত:

### Union উদাহরণ (React props):
```ts

type ButtonProps = {
  label: string;
  onClick: () => void;
} | {
  icon: string;
  onHover: () => void;
};
```
### Intersection উদাহরণ (Combining features):
```ts

type Draggable = { drag: () => void };
type Droppable = { drop: () => void };

type DragDrop = Draggable & Droppable;
```
---


🧾 উপসংহার

Enum আপনার কোডে স্ট্যান্ডার্ড মান ব্যবহারের একটা সুন্দর পদ্ধতি, আর Type Conclusion আপনাকে কম টাইপ লিখেও টাইপ- সেফ কোড লেখার সুযোগ দেয় । দুটোই TypeScript শেখার পথে গুরুত্বপূর্ণ হাতিয়ার । আর Type & Interface আপনাদের code করার সময় ধাপে ধাপে variable এর type define এবং Interface বড় বড় object এর আকার আকৃতি ও গতিপ্রকৃতি নিয়ে আগাম ধারনা প্রদান করে যা Developer দের Testing and debuging time কে আরও সহজ করে। কারন dev environment এ বেশিরভাগ এরর ধরা পরে।

---


# 🖊️Written by : Sarwar Hossain
  ### Full Stack Developer
  #### German Ostad


