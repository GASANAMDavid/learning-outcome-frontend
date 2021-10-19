import { shallow } from 'enzyme';
import UserRow from '../../../components/dashboard/user-management/userRow';

describe(UserRow, () => {
  const mockRow = {
    first_name: '', last_name: '', email: '', role: { id: 1, name: '' },
  };
  it('renders correctly', () => {
    shallow(<UserRow row={mockRow} />);
  });
});
