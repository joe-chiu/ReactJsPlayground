import {
  Avatar,
  Button,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  PresenceBadgeStatus,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
} from "@fluentui/react-components";
  
import {
  PeopleRegular,
  DocumentPdfRegular,
  OpenRegular,
  VideoRegular,
  FolderRegular,
  EditRegular,
  DocumentRegular,
} from "@fluentui/react-icons";

type FileCell = {
  label: string;
  icon: JSX.Element;
};

type LastUpdatedCell = {
  label: string;
  timestamp: number;
};

type LastUpdateCell = {
  label: string;
  icon: JSX.Element;
};

type AuthorCell = {
  label: string;
  status: PresenceBadgeStatus;
};

type Item = {
  file: FileCell;
  author: AuthorCell;
  lastUpdated: LastUpdatedCell;
  lastUpdate: LastUpdateCell;
};

const items: Item[] = [
  {
    file: { label: "Meeting notes", icon: <DocumentRegular /> },
    author: { label: "Max Mustermann", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular />,
    },
  },
  {
    file: { label: "Thursday presentation", icon: <FolderRegular /> },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    file: { label: "Training recording", icon: <VideoRegular /> },
    author: { label: "John Doe", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    file: { label: "Purchase order", icon: <DocumentPdfRegular /> },
    author: { label: "Jane Doe", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <PeopleRegular />,
    },
  },
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "file",
    compare: (a, b) => {
      return a.file.label.localeCompare(b.file.label);
    },
    renderHeaderCell: () => {
      return "File";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.file.icon}>
          {item.file.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "author",
    compare: (a, b) => {
      return a.author.label.localeCompare(b.author.label);
    },
    renderHeaderCell: () => {
      return "Author";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout
          media={
            <Avatar
              aria-label={item.author.label}
              name={item.author.label}
              badge={{ status: item.author.status }}
            />
          }
        >
          {item.author.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "lastUpdated",
    compare: (a, b) => {
      return a.lastUpdated.timestamp - b.lastUpdated.timestamp;
    },
    renderHeaderCell: () => {
      return "Last updated";
    },

    renderCell: (item) => {
      return item.lastUpdated.label;
    },
  }),
  createTableColumn<Item>({
    columnId: "lastUpdate",
    compare: (a, b) => {
      return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
    },
    renderHeaderCell: () => {
      return "Last update";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.lastUpdate.icon}>
          {item.lastUpdate.label}
        </TableCellLayout>
      );
    },
  }),
];

export const FilesTab = () => {
  return (
    <div id="filesTab" className="grow flex flex-row bg-indigo-50">
      <div id="filesList" className="flex-none w-72 flex flex-col shadow-lg">
        <div id="fileListHeader" className="flex-none h-14 flex flex-row items-center gap-2 p-3">
          <p className="grow w-52 text-lg font-bold">Files</p>
        </div>
        <div id="fileListContent" className="grow">
        </div>
      </div>
      <div id="filesPane" className="grow flex flex-col">
        <div id="filesPaneHeader" className="flex-none h-20">
        </div>
        <div id="filePaneContent" className="grow">
          <DataGrid        
            items={items}
            columns={columns}
            sortable
            selectionMode="multiselect"
            getRowId={(item) => item.file.label}
            onSelectionChange={(e, data) => console.log(data)}
            focusMode="composite"
          >
            <DataGridHeader>
              <DataGridRow selectionCell={{ "aria-label": "Select all rows" }}>
                {({ renderHeaderCell }) => (
                  <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
                )}
              </DataGridRow>
            </DataGridHeader>
            <DataGridBody<Item>>
              {({ item, rowId }) => (
                <DataGridRow<Item>
                  key={rowId}
                  selectionCell={{ "aria-label": "Select row" }}
                >
                  {({ renderCell }) => (
                    <DataGridCell>{renderCell(item)}</DataGridCell>
                  )}
                </DataGridRow>
              )}
            </DataGridBody>
          </DataGrid>
        </div>
      </div>
    </div>
  );
};
