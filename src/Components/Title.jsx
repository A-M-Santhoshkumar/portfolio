function Title({
  smallTitle,
  mainTitle,
  smallTitleClass = "",
  mainTitleClass = "",
  topSideAccess = "",
  isWhite = false
}) {
  const textColor = isWhite ? "text-white" : "text-black";

  return (
    <div className={`${topSideAccess}`}>
      <h4 className={`dark:text-white text-sm md:text-xl font-medium before-hero-gradient py-2 ${smallTitleClass} ${textColor}`}>
        {smallTitle}
      </h4>
      <h2 className={`dark:text-white text-3xl md:text-4xl font-bold font-syne ${mainTitleClass} ${textColor}`}>
        {mainTitle}
      </h2>
    </div>
  );
}

export default Title;
