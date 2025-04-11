# Startup Academy

A comprehensive online learning platform dedicated to startup founders and entrepreneurs, offering courses, mentorship, and real-world case studies.

## Features

- Entrepreneurship-focused courses and learning paths
- Live mentorship sessions with industry experts
- Business model development and startup case studies
- Funding, market research, and GTM strategy guides
- Interactive learning experience
- Progress tracking and certification

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Deployment**: Vercel

## Prerequisites

- Node.js 18.x or later
- PostgreSQL 14.x or later
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/startup-academy.git
   cd startup-academy
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
startup-academy/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable React components
│   ├── lib/             # Utility functions and configurations
│   ├── types/           # TypeScript type definitions
│   └── styles/          # Global styles and Tailwind configuration
├── prisma/              # Database schema and migrations
├── public/              # Static assets
└── package.json         # Project dependencies and scripts
```

## Development

- Run the development server:
  ```bash
  npm run dev
  ```

- Build for production:
  ```bash
  npm run build
  ```

- Start production server:
  ```bash
  npm run start
  ```

- Run linting:
  ```bash
  npm run lint
  ```

## Database Management

- Generate Prisma client:
  ```bash
  npx prisma generate
  ```

- Create a new migration:
  ```bash
  npx prisma migrate dev --name migration_name
  ```

- Reset the database:
  ```bash
  npx prisma migrate reset
  ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@startupacademy.com or join our [Discord community](https://discord.gg/startupacademy).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
