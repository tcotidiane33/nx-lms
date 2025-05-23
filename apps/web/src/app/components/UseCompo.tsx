import Button from './Button';
import Card from './Card';
import Loader from './Loader';

export default function Example() {
  return (
    <Card>
      <h2>Bienvenue</h2>
      <Button onClick={() => alert('Hello!')}>Cliquez-moi</Button>
      <Loader />
    </Card>
  );
}