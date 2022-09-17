const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotions) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    const resultTheaterIXX = [...theaterIXX];
    const resultTheaterVCG = [...theaterVGC];

    // console.log(resultTheaterIXX, resultTheaterVCG);

    // Menggabungkan data theaterIXX dan theaterVGC
    const result = resultTheaterIXX
      .map((emotion) => emotion.hasil)
      .concat(resultTheaterVCG.map((emotion) => emotion.hasil));
    // console.log(result);

    // Melakukan filter array sesuai dengan mood
    emotions = result.filter((result) => result === emotions);
    // console.log(emotions);

    // Menampilkan total mood berdasarkan emosi dan tidak emosi
    return emotions.length;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
