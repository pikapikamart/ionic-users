import { 
  DefaultError, 
  QueryClient, 
  QueryKey, 
  UseQueryOptions, 
  UseQueryResult} from "@tanstack/react-query"


export type UseCustomReactQuery = <TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: {
  onSuccess?: ( data: TData ) => void,
  onError?: ( error: TError ) => void
} & UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, queryClient?: QueryClient) => UseQueryResult<TData, TError>