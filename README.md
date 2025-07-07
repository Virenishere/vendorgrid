# VendorGrid

VendorGrid is a full-stack dashboard application built with **Next.js 14**, designed to manage vendor data. It includes secure authentication, a modern UI, and robust CRUD operations using MongoDB.

## 🚀 Features

- 🔐 **Authentication** – NextAuth with Google and Credentials provider
- 📦 **Database** – MongoDB with Mongoose
- 💡 **API Routes** – App Router (`/app/api/vendors`)
- 📊 **Charts** – Vendor demographics chart integration
- 🎨 **UI** – Tailwind CSS + shadcn/ui components
- ✍️ **Vendor CRUD** – Add, edit, delete, and view vendors
- 🌐 **Responsive Design** – Mobile-first and fully adaptive

## 📸 Demo

<img width="1919" height="911" alt="Image" src="https://github.com/user-attachments/assets/075cbd06-c1b3-45f9-80cf-46e80efd649a" />
<img width="1919" height="898" alt="Image" src="https://github.com/user-attachments/assets/ee0c3a23-2c75-4d90-819d-8cf826fe4cb5" />
<img width="1919" height="905" alt="Image" src="https://github.com/user-attachments/assets/340c7e50-775b-4245-80e3-336481d245b2" />
<img width="1919" height="910" alt="Image" src="https://github.com/user-attachments/assets/44042e41-f786-4161-a590-a16892d317a4" />
<img width="1919" height="898" alt="Image" src="https://github.com/user-attachments/assets/7305d4ae-ad11-46d8-a068-6bb25bdd46fe" />

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API routes, Mongoose, MongoDB
- **Auth**: NextAuth (Google + Credentials)
- **Tools**: Lucide icons, Zustand (if used), Recharts

## 📂 Folder Structure

```

/app
/dashboard
/api/vendors
/components
/models
/lib
/public

````

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/vendorgrid.git
cd vendorgrid
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env.local`

```env
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=your_nextauth_url
NEXT_PUBLIC_BASE_URL=your_public_base_url
```

### 4. Run the development server

```bash
npm run dev
```

## 🧾 API Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | `/api/vendors`     | Get all vendors   |
| POST   | `/api/vendors`     | Create a vendor   |
| GET    | `/api/vendors/:id` | Get single vendor |
| PUT    | `/api/vendors/:id` | Update vendor     |
| DELETE | `/api/vendors/:id` | Delete vendor     |

## 🤝 Contributing

Pull requests are welcome! Feel free to open an issue for bugs or suggestions.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Created by [Virender Prasad](https://github.com/Virenishere) 🚀


