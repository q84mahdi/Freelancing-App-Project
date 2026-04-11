function Empty({ resourceName }: { resourceName: string }) {
  return (
    <p className="text-center font-bold text-secondary-700">
      هیچ {resourceName} یافت نشد !
    </p>
  );
}
export default Empty;
