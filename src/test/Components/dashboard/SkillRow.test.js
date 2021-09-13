import React from 'react';
import { mount } from 'enzyme';
import {
  MenuItem, Button, Table, TableBody,
} from '@material-ui/core';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SkillRow from '../../../components/dashboard/SkillRow';

describe(SkillRow, () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({});
  let wrapper;

  it('shows menu for different skill levels', () => {
    wrapper = mount(
      <Provider store={store}>
        <Table>
          <TableBody>
            <SkillRow
              row={{ skills_level: '1', theme: { title: 'Title' } }}
              skillLevelOptions={[{ id: '1', display: '' }, { id: '2', display: '' }, { id: '3', display: '' }]}
            />
          </TableBody>
        </Table>
      </Provider>,
    );
    const button = wrapper.find(Button);

    button.simulate('click', { currentTarget: {} });
    expect(wrapper.find(MenuItem)).toHaveLength(3);
  });
});
