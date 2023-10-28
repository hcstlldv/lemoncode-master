import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent', () => {
  it('should render correct when props are passed correctly', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: <div>Test Content</div>,
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.labels.closeButton)).toBeInTheDocument();
    expect(getByText(props.labels.acceptButton)).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: <div>Test Content</div>,
    };
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Act
    fireEvent.click(getByText(props.labels.closeButton));

    // Assert
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('should call onAccept when the accetp button is clicked', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: <div>Test Content</div>,
    };
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Act
    fireEvent.click(getByText(props.labels.acceptButton));

    // Assert
    expect(props.onAccept).toHaveBeenCalledTimes(1);
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('should render title as node when provide an element', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: <h1>Hello World</h1>,
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: <div>Test Content</div>,
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
