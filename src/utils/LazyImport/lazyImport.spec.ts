// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     lazy: jest.fn().mockImplementation((fn) => fn()),
//   }));

//   import * as React from 'react';
// import { lazyImport } from './lazyImport'; // Adjust the import path as necessary

// describe('lazyImport', () => {
//   it('should transform the import promise and pass it to React.lazy', async () => {
//     // Mock for a dynamically imported component
//     const mockComponent = () => <div>Mock Component</div>;

//     // Mock the dynamic import function
//     const factory = jest.fn().mockResolvedValue({ MockComponent: mockComponent });

//     // Perform the lazy import
//     const { MockComponent } = lazyImport(factory, 'MockComponent');

//     // Expect that React.lazy was called
//     expect(React.lazy).toHaveBeenCalled();

//     // Optional: Check the lazy component renders correctly (may require additional setup)
//     // const { container } = render(<Suspense fallback={<div>Loading...</div>}><MockComponent /></Suspense>);
//     // expect(container.textContent).toBe('Mock Component');
//   });
// });
