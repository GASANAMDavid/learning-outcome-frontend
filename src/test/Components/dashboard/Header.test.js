import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../components/dashboard/Header';

describe('Dashboard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  describe('Profile Picture button', () => {
    beforeEach(() => {
      const button = wrapper.find('.user-info');
      button.simulate('click');
    });
    it('has username typographies', () => {
      expect(wrapper.find('#user-name').text()).toContain('David Gasana Manzi');
    });
    it('has occupation', () => {
      expect(wrapper.find('#occupation').text()).toContain('Software Engineer');
    });

    describe('Profile button', () => {
      it('on click, renders profile page', () => {
        wrapper.find('#profile').simulate('click');
        expect('#').toEqual('#');
      });
    });

    describe('Settings button', () => {
      it('on click, renders profile page', () => {
        wrapper.find('#settings').simulate('click');
        expect('#').toEqual('#');
      });
    });
  });
});
