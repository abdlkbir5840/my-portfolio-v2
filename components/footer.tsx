export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Abdlkbir. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

