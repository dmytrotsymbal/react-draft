import { changeFilter } from 'redux/filterSlice'
import { useAppDispatch } from 'redux/hooks'

type Props = {}
const Filters = (props: Props) => {
    const dispatch = useAppDispatch()

    return (
        <>
            <div className="FiltersBlock">
                <button onClick={() => dispatch(changeFilter('all'))}>
                    All
                </button>
                <button onClick={() => dispatch(changeFilter('completed'))}>
                    Completed
                </button>
                <button onClick={() => dispatch(changeFilter('active'))}>
                    Active
                </button>
            </div>
        </>
    )
}
export default Filters
