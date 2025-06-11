# Zustand Integration

This project now uses Zustand for state management, providing a simple and effective way to manage the browser extensions data and filtering state.

## Store Structure

### Extensions Store (`app/store/useExtensionsStore.ts`)

The main store manages:

- **Extensions data**: Array of extension objects with logo, name, description, and active status
- **Filter state**: Current filter selection (All, Active, Inactive)

#### Available Actions:

- `setExtensions(extensions)` - Initialize or update the extensions array
- `toggleExtension(name)` - Toggle an extension's active status
- `removeExtension(name)` - Remove an extension from the list
- `setFilter(filter)` - Set the current filter
- `getFilteredExtensions()` - Get extensions based on current filter

### Persistence

The store uses Zustand's persist middleware to save state to localStorage, ensuring data persists across browser sessions.

## Usage Examples

### In Components:

```tsx
import { useExtensionsStore } from "../store/useExtensionsStore";

// Get state
const extensions = useExtensionsStore((state) => state.extensions);
const filter = useExtensionsStore((state) => state.filter);

// Get actions
const setFilter = useExtensionsStore((state) => state.setFilter);
const toggleExtension = useExtensionsStore((state) => state.toggleExtension);

// Get computed values
const getFilteredExtensions = useExtensionsStore(
  (state) => state.getFilteredExtensions,
);
const filteredExtensions = getFilteredExtensions();
```

### Filter Management:

The Filter component now dynamically manages filter buttons and updates the global state when filters are changed.

### Extension Management:

- Extensions can be toggled active/inactive
- Extensions can be removed from the list
- Filter state automatically updates the displayed extensions

## Files Modified:

1. **app/store/useExtensionsStore.ts** - Main Zustand store
2. **app/hooks/useInitializeExtensions.ts** - Initialization hook
3. **app/page.tsx** - Added initialization hook
4. **app/components/Filter.tsx** - Connected to Zustand for filter management
5. **app/components/ListCards.tsx** - Connected to Zustand for data management
6. **app/components/Themes/Card.tsx** - Fixed onClick handler for Remove button

## Benefits:

- **Centralized State**: All state is managed in one place
- **Persistence**: State survives page refreshes
- **Type Safety**: Full TypeScript support
- **Performance**: Only components using specific state pieces re-render
- **Developer Experience**: Simple API with good debugging tools
