import { handleCreatePostSubmission } from "@/app/actions";
import SubmitButton from "@/components/general/submit-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateRoute() {
  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create New Blog</CardTitle>
          <CardDescription>
            Create a new post to share you knowledge with world
          </CardDescription>
          <CardContent>
            <form className="flex flex-col gap-4" action={handleCreatePostSubmission}>
              <div className="flex flex-col gap-2">
                <Label>Title</Label>
                <Input name="title" required type="text" placeholder="Title" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Content</Label>
                <Textarea name="content" required placeholder="Content" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Image URL</Label>
                <Input name="imageUrl" required type="url" placeholder="Image URL" />
              </div>

              <SubmitButton/>
            </form>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
