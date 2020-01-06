import readTimeEstimate from "read-time-estimate";

const WORDS_PER_MIN = 180;
const IMAGE_READ_TIME = 12;
const CHINESE_KOREAN_READ_TIME = 500;
const IMAGE_TAGS = ["img", "Image"];

const readTime = (
  string,
  wordsPerMin = WORDS_PER_MIN,
  imageReadTime = IMAGE_READ_TIME,
  chineseKoreanReadTime = CHINESE_KOREAN_READ_TIME,
  imageTags = IMAGE_TAGS
) => {
  const { humanizedDuration } = readTimeEstimate(
    string,
    wordsPerMin,
    imageReadTime,
    chineseKoreanReadTime,
    imageTags
  );
  switch (humanizedDuration) {
    case "less than a minute":
      return "mniej niż minutę";
    case "1 minute":
      return "1 min";
    default:
      return humanizedDuration.replace("minutes", "min");
  }
};

export default readTime;
