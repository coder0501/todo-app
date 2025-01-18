declare module 'react-beautiful-dnd' {
    import * as React from 'react';
    import { ReactNode, ReactElement } from 'react';
  
    export interface DraggableProvided {
      innerRef: (element?: HTMLElement | null) => any;
      draggableProps: React.HTMLProps<HTMLDivElement>;
      dragHandleProps: React.HTMLProps<HTMLDivElement>;
    }
  
    export interface DraggableStateSnapshot {
      isDragging: boolean;
      draggingOver: string | null;
    }
  
    export interface DroppableProvided {
      innerRef: (element?: HTMLElement | null) => any;
      droppableProps: React.HTMLProps<HTMLDivElement>;
      placeholder: ReactNode; // Ensure placeholder is included here
    }
  
    export interface DroppableStateSnapshot {
      isDraggingOver: boolean;
    }
  
    export interface DragDropContextProps {
      onDragEnd: (result: any) => void;
      onDragStart?: (start: any) => void;
      onDragUpdate?: (update: any) => void;
      children?: React.ReactNode;
    }
  
    export const DragDropContext: React.FC<DragDropContextProps>;
    
    export const Droppable: React.FC<{
      droppableId: string;
      children: (
        provided: DroppableProvided,
        snapshot: DroppableStateSnapshot
      ) => React.ReactNode;
    }>;
  
    export const Draggable: React.FC<{
      draggableId: string;
      index: number;
      children: (
        provided: DraggableProvided,
        snapshot: DraggableStateSnapshot
      ) => React.ReactNode;
    }>;
  }
  