import { authActions } from '../../actions/actionTypes';
import { ROLES } from './../../consts/roles';

import { authReducer } from './../authReducer';

const initState = { role: ROLES.UNSPECIFIED };

describe('reducers - authReducer', () => {
    // Arrange
    const newContext = { role: ROLES.CLIENT, id: 1 };

    it('should return the proper role', () => {

        // Act
        const reducer = authReducer(init_value, {
            type: authActions.GET_AUTH_CONTEXT.SUCCESS,
            data: newContext
        });

        // Assert
        expect(reducer.role).toEqual(newContext.role);
    });
})
