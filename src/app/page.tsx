import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome to Firebase Studio</CardTitle>
          <CardDescription>Your app is up and running!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Get started by telling me what you want to build or change. For example, you could ask me to "create a photo gallery".
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
