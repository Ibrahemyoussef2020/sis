---
name: web-artifacts-builder
description: Suite of tools for creating elaborate, multi-component frontend artifacts using React, Tailwind CSS, shadcn/ui
---

# Web Artifacts Builder

**Stack**: React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui

## Design & Style Guidelines

Avoid "AI slop": avoid excessive centered layouts, purple gradients, uniform rounded corners, and Inter font.

## Common Development Tasks

### Component Creation
- Create components in `src/components/` using shadcn/ui patterns
- Use Radix UI primitives for accessible interactions
- Style with Tailwind CSS utility classes

### State Management
- Use React hooks (useState, useEffect, useReducer, useContext)
- Keep state as local as possible

### Styling
- Tailwind CSS for all styling
- Use CSS variables from globals.css for theme consistency
- Responsive design using Tailwind breakpoints

### shadcn/ui Components Available
Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, ContextMenu, DataTable, DatePicker, Dialog, Drawer, DropdownMenu, Form, HoverCard, Input, Label, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Switch, Table, Tabs, Textarea, Toast, Toggle, ToggleGroup, Tooltip

## Accessibility
- Semantic HTML
- Keyboard navigation
- Focus management
- ARIA labels where needed
- Reduced motion support
