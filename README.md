# Test

1. Create a component containing buttons labelled “Open“ and “Reset”.

2. Upon clicking the “Open” button, a modal should display with the message, “Modal has been clicked {count} times”.

3. Upon clicking the Close/X button in the modal, it should close.

4. Clicking the “Open” button again should continue the current count.

5. Upon clicking the “Reset” button, the count value should reset to zero and the modal popup count should start from one again.

# Implementation Details:

1. Created a custom component called modal. Its body is a black box and the
   consumer can pass the required content as per their need.

2. Implemented some basic accessibility features for the modal, as a part of a11y compliant all the modals should have `h1` tag in it with `role="dialog"`.

3. Leveraged CSS3 `flex` features for aligning the modal title and body.

4. Modal show state is maintained in the parent(App) component with the help
   of `useState` hooks.
