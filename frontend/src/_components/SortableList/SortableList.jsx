import React from 'react';
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { SortableItem } from './components';
import { useAppVersionsManagerActions } from '@/_stores/appVersionsManagerStore';
export function SortableList({ items, onChange, renderItem, isVersionReleased }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const { enableReleasedVersionPopupState } = useAppVersionsManagerActions();

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={({ active, over }) => {
        if (isVersionReleased) {
          enableReleasedVersionPopupState();
          return;
        }
        if (over) {
          const activeIndex = items.findIndex(({ id }) => id === active.id);
          const overIndex = items.findIndex(({ id }) => id === over.id);

          onChange(arrayMove(items, activeIndex, overIndex));
        }
      }}
    >
      <SortableContext items={items}>
        {items.map((item) => (
          <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>
        ))}
      </SortableContext>
    </DndContext>
  );
}

SortableList.Item = SortableItem;
