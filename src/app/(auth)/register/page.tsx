import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisterForm } from "./components/form";

export default function Register() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar conta</CardTitle>
        <CardDescription>
          Preencha os campos para criar sua conta.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <RegisterForm />
      </CardContent>
    </Card>
  );
}
