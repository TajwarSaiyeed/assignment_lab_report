import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  loadFromLocalStorage: () => void;
  createNewDocument: () => void;
}

export default function Header({
  loadFromLocalStorage,
  createNewDocument,
}: HeaderProps) {
  return (
    <Card className="print:hidden bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
      <CardContent className="p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Assignment/Report Editor
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Create professional academic documents for BGC Trust University
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={createNewDocument}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Create New Document
          </Button>
          <Button
            onClick={loadFromLocalStorage}
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            Load Saved Data
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
