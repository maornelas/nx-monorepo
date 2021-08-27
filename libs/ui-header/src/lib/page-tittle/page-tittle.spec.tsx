import { render } from '@testing-library/react';

import PageTittle from './page-tittle';

describe('PageTittle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageTittle />);
    expect(baseElement).toBeTruthy();
  });
});
