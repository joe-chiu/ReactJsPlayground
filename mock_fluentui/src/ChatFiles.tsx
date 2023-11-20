import {
  Button,
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
} from "@fluentui/react-components";

import {
  DocumentAddRegular,
} from "@fluentui/react-icons";

import { GetChatFilesTableColumns, GetChatFilesTableItems, Item } from "./data";

export const ChatFiles = () => {
  return (
    <div className="flex flex-col p-2 w-full">
      <div className="pb-2">
        <Button appearance="transparent" icon={<DocumentAddRegular />}>Share</Button>
      </div>
      <DataGrid        
        items={GetChatFilesTableItems()}
        columns={GetChatFilesTableColumns()}
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
  );
};
