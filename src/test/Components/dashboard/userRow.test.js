import { shallow } from 'enzyme';
import UserRow from '../../../components/dashboard/user-management/userRow';

describe(UserRow, () => {
  const mockHandleDelete = jest.fn();
  const mockRow = {
    id: 1, first_name: '', last_name: '', email: '', role: { id: 1, name: '' },
  };
  it('renders correctly', () => {
    shallow(<UserRow row={mockRow} />);
  });

  it('deletes a user from the list', () => {
    const wrapper = shallow(<UserRow row={mockRow} handleDelete={mockHandleDelete} />);
    const button = wrapper.find('.deleteBtn-1');
    button.simulate('click');
    expect(mockHandleDelete).toHaveBeenCalled();
  });
});
