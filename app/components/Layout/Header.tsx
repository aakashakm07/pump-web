import { NavBar } from '@app/components/Layout/NavBar/NavBar';
import { Logo } from '@app/components/Logo/Logo';
import testIds from '@app/utils/test-ids';

const Header = () => (
  <>
    <header
      className="w-full py-1 px-2 sm:px-8"
      data-testid={testIds.LAYOUT.HEADER}
    >
      <div className="flex sm:px-6 h-header sm:items-center">
        <h2 className="flex-1">
          <a
            href="/"
            className="flex items-center gap-2 sm:gap-6"
          >
            <Logo />
                    </a>
        </h2>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  </>
);

export default Header;
