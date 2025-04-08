# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

```type Props = {
  data: IFilesListResponse['results']
}

const columns = [
  { id: 'name', label: 'Название', minWidth: 170, maxWidth: 170 },
  { id: 'size', label: 'Размер', maxWidth: 120, minWidth: 120 },
  { id: 'type', label: 'Тип', maxWidth: 120, minWidth: 120 },
  { id: 'action', label: 'Действие', maxWidth: 120, minWidth: 120 },
]

async function TableListFiles(props: Props) {
  const { data } = props


  const handleMoreDetails = async (id: string) => {
    'use server'
    return await getFileDetail(id)
  }

  const handleDelete = async (id: string) => {
    'use server'
    try {
      await deleteFile(id)
      revalidatePath('/files') // Ревалидация страницы после удаления
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }
  }

  const copyToClipboard = async (text: string) => {
    'use server'
  // здесь напиши логику какую надо
    return text
  }

  return (
    <TableContainer
      component={Box}
      sx={{
        maxWidth: '100%',
        maxHeight: '800px',
        height: '100%',
        overflow: 'hidden',
        overflowY: 'auto',
        overflowX: 'auto',
        borderRadius: '8px',
        backgroundColor: 'white',
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.id === 'action' ? 'left' : 'center'}
                sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: any) => (
            <React.Fragment key={row.id}>
              <TableRow hover role='checkbox' tabIndex={-1}>
                {columns.map((column) => {
                  let value = row[column.id]
                  if (column.id === 'size') value = convertSizeFile(row.size)
                  return (
                    <TableCell
                      key={column.id}
                      align={column.id === 'action' ? 'right' : 'center'}
                    >
                      {value}
                      {column.id === 'action' && (
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            maxHeight: '24px',
                            alignItems: 'center',
                            marginLeft: '-24px'
                          }}
                          key={row.id}
                        >
                          <IconActions
                            fileId={row.id}
                            handleDelete={handleDelete}
                            handleMoreDetails={handleMoreDetails}
                          />
                        </div>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableListFiles```

