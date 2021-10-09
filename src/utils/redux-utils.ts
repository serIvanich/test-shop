import {ActionCreatorsMapObject, bindActionCreators} from "redux";
import {useMemo} from "react";
import {useDispatch} from "react-redux";
// import {useAppDispatch} from "./types";


export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
    const dispatch = useDispatch()

    const boundActions = useMemo(() => {
        return bindActionCreators(actions, dispatch)
    }, [])

    return boundActions
}
