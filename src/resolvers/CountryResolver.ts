import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  async getCountries(): Promise<Country[]> {
    return await Country.find();
  }

  @Query(() => Country, { nullable: true })
  async getCountry(@Arg("code") code: string): Promise<Country | null> {
    return await Country.findOneBy({ code });
  }

  @Query(() => [Country])
  async getCountriesByContinent(
    @Arg("continent") continent: string
  ): Promise<Country[]> {
    return await Country.findBy({ continent });
  }

  @Mutation(() => Country)
  async createCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string,
    @Arg("continent") continent: string
  ): Promise<Country> {
    const country = new Country();
    country.code = code;
    country.name = name;
    country.emoji = emoji;
    country.continent = continent;

    return await Country.save(country);
  }
}
