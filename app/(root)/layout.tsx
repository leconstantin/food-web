import SiteHeader from "@/components/layout/site-header";

export default function AppLayout(props: LayoutProps<"/">) {
  return (
    <div className="relative z-10 flex min-h-svh flex-col bg-background">
      <SiteHeader />
      <main className="container-wrapper flex min-h-screen flex-1 flex-col bg-muted/10">
        {props.children}
      </main>
    </div>
  );
}
