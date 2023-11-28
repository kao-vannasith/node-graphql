/* eslint-disable prettier/prettier */
import Movie from './models/movie';
export const resolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getMovies: async (_:any) => {
      return await Movie.find();
    },
   
  },
  Mutation: {
    createMovie: async (parent: any, args: any) => {
      // eslint-disable-next-line sort-destructure-keys/sort-destructure-keys
      const{ title, rating, year } = args.info;
      // eslint-disable-next-line newline-after-var
      const createdMovie = new Movie({
        title,
        rating, 
        year
      });
      // eslint-disable-next-line newline-after-var
      await createdMovie.save();
      // eslint-disable-next-line semi
      return 'create'
    },
  },
// eslint-disable-next-line semi
}
