import { SiteFooter } from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

export default function AppLayout(props: LayoutProps<"/">) {
  return (
    <div className="relative z-10 flex min-h-svh flex-col overflow-hidden bg-background">
      <SiteHeader />
      <main className="container-wrapper relative flex min-h-screen flex-1 flex-col bg-muted/10">
        {props.children}
      </main>
      <SiteFooter />
    </div>
  );
}
