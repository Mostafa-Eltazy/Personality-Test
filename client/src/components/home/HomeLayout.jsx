import { useQuery } from 'react-query'
import Spinner from 'react-bootstrap/Spinner'
import { getQuestions } from '../../api/files.api'
import Questionaier from './Questionaier'

const HomeLayout = () => {
  const { data, isLoading, isFetching } = useQuery(
    ['questions'],
    () => getQuestions(),
    {
      initialData: { questions: [] },
      refetchInterval: 0,
      refetchOnWindowFocus: false,
    },
  )
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          {isLoading || isFetching ? (
            <>
              <span className="mb-3"> Fetching your Questions ... </span>
              <Spinner animation="border" variant="primary" className="mb-4" />
            </>
          ) : (
            <>
              <Questionaier questions_list={data?.map((q)=>{return {...q, selection:""} })} />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default HomeLayout
