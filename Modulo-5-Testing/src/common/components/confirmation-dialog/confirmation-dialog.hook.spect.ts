import { useConfirmationDialog } from './confirmation-dialog.hook';
import { renderHook, act } from '@testing-library/react';
import { createEmptyLookup, Lookup } from 'common/models';

describe('useConfirmationDialog specs', () => {
  it('should return an object with default values', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should delete itemToDelete when onOpenDialog is called', () => {
    // Arrange
    const item: Lookup = { id: 'testing-1', name: 'item-1' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('should reset itemToDelete to an empty object when onAccept is called', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog({ id: 'testing-2', name: 'item-22' });
    });

    // Act
    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
    expect(result.current.isOpen).toBe(false);
  });

  it('should set isOpen to false when onClose is called', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog({ id: 'testing-3', name: 'item-3' });
    });

    // Act
    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
  });
});
