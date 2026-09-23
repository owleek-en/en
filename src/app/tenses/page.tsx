import { Note, NoteItem, NoteTittle } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <Note title='Tenses'>
        <NoteItem>
          <NoteTittle>
            Present Simple
          </NoteTittle>
          <p>
            Утверждение: S + V1 / V1+s<br />
            пример: <br />
            I work. <br />
            He works.
          </p>
          <p>
            S - subject (подлежащее) <br />
            Подлежащее указывает, кто или что совершает действие либо находится в определенном состоянии. <br />
            Кто? (Who?) или Что? (What?) <br /><br />

            V - Verb (cказуемое) <br />
            Что делает subject ? Что с ним происходит ? Кто/какой он есть? <br />
            В отличие от русского языка, где глагол-связку «быть» в настоящем времени часто опускают (например, «Я [есть] студент»),<br />
            в английском языке сказуемое должно быть в каждом предложении (например, I am a student). <br />
            Если хочется использовать am, то после него у глагола обязательно должно появиться окончание -ing <br /><br />
            Нельзя сказать: I am work - поскольку это переводится как `Я есть работа`<br />
            Правильно: I am working - `Я есть работающий` - Я работаю.<br /><br />
            <p>Разница между I work every day VS I am working every day</p>
          </p>
        </NoteItem>
      </Note>
    </>
  );
}
