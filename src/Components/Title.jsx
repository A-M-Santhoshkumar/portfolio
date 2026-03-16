function Title({
  smallTitle,
  mainTitle,
  smallTitleClass = "",
  mainTitleClass = "",
  topSideAccess = "",
  isWhite = false,
  mainTag = "h2",   // h1, h2, h3 support
  smallTag = "h4"
}) {
  const textColor = isWhite ? "text-white" : "text-black";

  const MainTag = mainTag;
  const SmallTag = smallTag;

  return (
    <div className={`${topSideAccess}`}>
      
      {smallTitle && (
        <SmallTag
          className={`dark:text-white text-sm md:text-lg font-medium py-2 ${smallTitleClass} ${textColor}`}
        >
          {smallTitle}
        </SmallTag>
      )}

      <MainTag
        className={`dark:text-white text-2xl md:text-4xl font-bold font-syne leading-snug ${mainTitleClass} ${textColor}`}
      >
        {mainTitle}
      </MainTag>

    </div>
  );
}

export default Title;