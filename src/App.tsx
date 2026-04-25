import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/politica-de-privacidade" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}
