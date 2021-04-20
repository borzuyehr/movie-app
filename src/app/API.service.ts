/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type Movie = {
  __typename: "Movie";
  id?: string;
  Title?: string;
  Image?: string;
  Rating?: string;
};

export type CreateMovieInput = {
  id: string;
  Title: string;
  Image: string;
  Rating: string;
};

export type UpdateMovieInput = {
  id: string;
  Title?: string | null;
  Image?: string | null;
  Rating?: string | null;
};

export type DeleteMovieMutation = {
  __typename: "Movie";
  id: string;
  Title: string;
  Image: string;
  Rating: string;
};

export type CreateMovieMutation = {
  __typename: "Movie";
  id: string;
  Title: string;
  Image: string;
  Rating: string;
};

export type UpdateMovieMutation = {
  __typename: "Movie";
  id: string;
  Title: string;
  Image: string;
  Rating: string;
};

export type GetMovieQuery = {
  __typename: "Movie";
  id: string;
  Title: string;
  Image: string;
  Rating: string;
};

export type ListMoviesQuery = {
  __typename: "Movie";
  id: string;
  Title: string;
  Image: string;
  Rating: string;
};

export type OnCreateMovieSubscription = {
  __typename: "Movie";
  id: string;
  Title: string;
  Image: string;
  Rating: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async DeleteMovie(id: string): Promise<DeleteMovieMutation> {
    const statement = `mutation DeleteMovie($id: String!) {
        deleteMovie(id: $id) {
          __typename
          id
          Title
          Image
          Rating
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMovieMutation>response.data.deleteMovie;
  }
  async CreateMovie(
    createMovieInput: CreateMovieInput
  ): Promise<CreateMovieMutation> {
    const statement = `mutation CreateMovie($createMovieInput: CreateMovieInput!) {
        createMovie(createMovieInput: $createMovieInput) {
          __typename
          id
          Title
          Image
          Rating
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createMovieInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMovieMutation>response.data.createMovie;
  }
  async UpdateMovie(
    updateMovieInput: UpdateMovieInput
  ): Promise<UpdateMovieMutation> {
    const statement = `mutation UpdateMovie($updateMovieInput: UpdateMovieInput!) {
        updateMovie(updateMovieInput: $updateMovieInput) {
          __typename
          id
          Title
          Image
          Rating
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateMovieInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMovieMutation>response.data.updateMovie;
  }
  async GetMovie(id: string): Promise<GetMovieQuery> {
    const statement = `query GetMovie($id: String!) {
        getMovie(id: $id) {
          __typename
          id
          Title
          Image
          Rating
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMovieQuery>response.data.getMovie;
  }
  async ListMovies(): Promise<Array<ListMoviesQuery>> {
    const statement = `query ListMovies {
        listMovies {
          __typename
          id
          Title
          Image
          Rating
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListMoviesQuery>>response.data.listMovies;
  }
  OnCreateMovieListener: Observable<
    SubscriptionResponse<OnCreateMovieSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMovie {
        onCreateMovie {
          __typename
          id
          Title
          Image
          Rating
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateMovieSubscription>>;
}
