import { useLoading, Puff } from "@agney/react-loading";

export function Content() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Puff width="200" />,
  });

  return (
    <section style={{ color: "rgb(36, 150, 226, 1)" }} {...containerProps}>
      {indicatorEl}
    </section>
  );
}
