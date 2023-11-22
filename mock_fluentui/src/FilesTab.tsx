import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
} from "@fluentui/react-components";
  
import { 
  GetChatFilesTableColumns, 
  GetChatFilesTableItems, 
  Item 
} from "./data";

export const FilesTab = () => {
  return (
    <div id="filesTab" className="grow flex flex-row bg-indigo-50">
      <div id="filesList" className="flex-none w-80 flex flex-col shadow-lg">
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
      </div>
    </div>
  );
};
