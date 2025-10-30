import { render } from '@testing-library/react';

import FiberXShared from './shared';

describe('FiberXShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FiberXShared />);
    expect(baseElement).toBeTruthy();
  });
});
