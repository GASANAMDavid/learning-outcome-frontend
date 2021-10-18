import { shallow } from 'enzyme';
import Dropdown from '../../../components/dashboard/Dropdown';

jest.mock('../../../helpers/auth');
jest.mock('../../../helpers/localStorage');

const mockHistory = { push: jest.fn() };
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => mockHistory,
}));

describe(Dropdown, () => {
  let wrapper;
  const mockProfile = {
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane@doe.com',
    role_id: 1,
  };

  const mockHandleLogout = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Dropdown handleLogout={mockHandleLogout} profile={mockProfile} />);
  });

  it('shows current logged in user names', () => {
    expect(wrapper.find('#user-name').text()).toEqual('Jane Doe');
  });

  it('has a button to show user account details', () => {
    wrapper.find('#profile').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith('/dashboard/account');
  });

  it('has a button to logout a user', () => {
    wrapper.find('#logout').simulate('click');
    expect(mockHandleLogout).toHaveBeenCalledTimes(1);
  });
});
